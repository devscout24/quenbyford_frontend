import { useState } from "react";
import { eachDayOfInterval, format, isSameDay } from "date-fns";

interface WeeklyViewProps {
  currentWeekStart: Date;
  currentWeekEnd: Date;
  days: string[];
  events: { date: Date; title: string; time?: string; description?: string; extraInfo?: string; cta?: string }[];
}

const WeeklyView = ({ currentWeekStart, currentWeekEnd, days, events }: WeeklyViewProps) => {
  const [hoveredEvent, setHoveredEvent] = useState<string | null>(null);

  const weeklyDays = eachDayOfInterval({
    start: currentWeekStart,
    end: currentWeekEnd
  });

  return (
    <div>
      <div className="w-full max-w-[850px] mx-auto rounded-xl border border-slate-200 shadow-xl mt-8">
        {/* Orange Header */}
        <div className="bg-[#F97316] p-4 text-center rounded-t-xl">
          <h3 className="text-white text-xl font-bold">Week of {format(currentWeekStart, 'MMMM d, yyyy')}</h3>
        </div>

        {/* Weekly Grid */}
        <div className="grid grid-cols-7 bg-[#F97316]">
          {/* Day Headers */}
          {days.map((day, index) => (
            <div key={index} className="bg-[#F97316] py-3 text-center text-white text-xs font-semibold">
              {day}
            </div>
          ))}

          {/* Date Cells */}
          {weeklyDays.map((day, idx) => {
            const isToday = isSameDay(day, new Date());
            const dayEvents = events.filter(e => isSameDay(e.date, day));
            const cellKey = `week-cell-${idx}`;
            const hasEvents = dayEvents.length > 0;

            return (
              <div
                key={idx}
                className={`min-h-[80px] sm:min-h-25 p-1 sm:p-2 relative transition-colors border-x border-gray-300 
                  ${hasEvents ? 'bg-[#F97316] text-white cursor-pointer hover:bg-[#e5680f]' : 'bg-white'}`}
                onMouseEnter={() => hasEvents && setHoveredEvent(cellKey)}
                onMouseLeave={() => setHoveredEvent(null)}
              >
                <div className={`w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center rounded-full text-[10px] sm:text-xs font-medium 
                  ${hasEvents ? 'text-white' : 'text-slate-700'}`}>
                  {format(day, 'd')}
                </div>

                {/* Events */}
                {dayEvents.map((evt, eIdx) => (
                  <div key={eIdx} className="mt-2 text-center rounded px-1 sm:px-2 py-0.5 sm:py-1">
                    <span className="text-[10px] sm:text-xs font-bold leading-tight block text-white">
                      {evt.title}
                    </span>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>

      {/* Event Detail Card — shows below weekly calendar on hover */}
      {hoveredEvent && (() => {
        const idx = parseInt(hoveredEvent.replace('week-cell-', ''));
        const day = weeklyDays[idx];
        if (!day) return null;
        const dayEvents = events.filter(e => isSameDay(e.date, day));
        if (dayEvents.length === 0) return null;

        return (
          <div className="w-full max-w-[850px] mx-auto mt-4 bg-white rounded-xl shadow-2xl border border-orange-200 p-6 sm:p-8 text-left">
            {dayEvents.map((evt, eIdx) => (
              <div key={eIdx}>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 rounded-full bg-[#F97316] shrink-0" />
                  <span className="text-sm font-semibold text-[#F97316] uppercase tracking-wide">{format(day, 'EEEE, MMMM d, yyyy')}</span>
                </div>
                {evt.time && <p className="text-base font-bold text-[#1E88E5] mb-1">{evt.time}</p>}
                <h4 className="text-lg font-bold text-black mb-4">{evt.title}</h4>
                {evt.description && <p className="text-sm text-gray-700 leading-relaxed mb-3">{evt.description}</p>}
                {evt.extraInfo && <p className="text-sm text-gray-700 leading-relaxed mb-3">{evt.extraInfo}</p>}
                {evt.cta && <p className="text-sm text-gray-500 italic leading-relaxed">{evt.cta}</p>}
              </div>
            ))}
          </div>
        );
      })()}
    </div>
  );
}

export default WeeklyView;
