import { eachDayOfInterval, format, isSameDay } from "date-fns";

interface WeeklyViewProps {
  currentWeekStart: Date;
  currentWeekEnd: Date;
  days: string[];
  events: { date: Date; title: string }[];
}

const WeeklyView = ({ currentWeekStart, currentWeekEnd, days, events }: WeeklyViewProps) => {
  const weeklyDays = eachDayOfInterval({
    start: currentWeekStart,
    end: currentWeekEnd
  });

  return (
    <div className="w-full max-w-[850px] mx-auto rounded-xl overflow-hidden border border-slate-200 shadow-xl mt-8">
      {/* Orange Header */}
      <div className="bg-[#F97316] p-4 text-center">
        <h3 className="text-white text-xl font-bold">Week of {format(currentWeekStart, 'MMMM d, yyyy')}</h3>
      </div>

      {/* Weekly Grid (Similar to Monthly but taller and only 7 cells) */}
      <div className="grid grid-cols-7 bg-[#F97316] ">
        {/* Day Headers */}
        {days.map((day, index) => (
          <div key={index} className="bg-[#F97316] py-3 text-center text-white text-xs font-semibold ">
            {day}
          </div>
        ))}

        {/* Date Cells */}
        {weeklyDays.map((day, idx) => {
          const isToday = isSameDay(day, new Date());
          const dayEvents = events.filter(e => isSameDay(e.date, day));

          return (
            <div
              key={idx}
              className={`min-h-[80px] sm:min-h-25 relative transition-colors border-x border-gray-300 
                ${isToday ? 'bg-[#F97316] text-white' : 'bg-white'}`}
            >
              <div className={`w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center rounded-full text-[10px] sm:text-xs font-medium 
                ${isToday ? 'text-white' : 'text-slate-700'}`}>
                {format(day, 'd')}
              </div>

              {/* Events */}
              {dayEvents.map((evt, eIdx) => (
                <div key={eIdx} className={`mt-2 text-center rounded px-1 sm:px-2 py-0.5 sm:py-1 ${isToday ? '' : ''}`}>
                  <span className={`text-[10px] sm:text-xs font-bold leading-tight block ${isToday ? 'text-white' : 'text-orange-600'}`}>
                    {evt.title}
                  </span>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WeeklyView;
