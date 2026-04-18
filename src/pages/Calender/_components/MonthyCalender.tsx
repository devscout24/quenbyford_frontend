import { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

import {
  format,
  addMonths,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  isSameMonth,
  isSameDay,
  eachDayOfInterval,
  parse
} from 'date-fns';
import ViewList from './ViewList';
import WeeklyView from './WeeklyView';

const eventDescription = "FCHCC Members: Mark your calendars to join us at the monthly Social Cafecito event! These meetings are an ideal space for our members to exchange ideas and establish professional relationships. With the participation of the most prominent business leaders in our community, it ensures an enriching experience.";
const eventExtraInfo = "Its purpose is to bring in speakers every month who will cover topics in: marketing, capital, finance, legal, communities and more! Expand your business network and learn from the best. Social Cafecito meets each month on the 3rd Friday. Not an FCHCC member? Join here.";
const eventCta = "Be sure to look out for the meeting invites to learn when registration opens. You can subscribe to our mailing list at fchcc.com.";

const EventCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [hoveredEvent, setHoveredEvent] = useState<string | null>(null);

  const handleMonthChange = (value: string) => {
    const parsedDate = parse(value, 'MMM-yyyy', new Date());
    setCurrentDate(parsedDate);
  };

  // Generate day labels
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Calculate grid days for Monthly View
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const calendarDays = eachDayOfInterval({
    start: startDate,
    end: endDate
  });
  const year = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  // Generate month options for the Select (Current month +/- 6 months)
  const monthOptions = Array.from({ length: 13 }, (_, i) => {
    const date = addMonths(new Date(), i - 6);
    return {
      value: format(date, 'MMM-yyyy'),
      label: format(date, 'MMMM yyyy')
    };
  });

  // FCHCC Social Cafecito Meeting dates
  const events = [
    { date: new Date(year, 0, 16), title: "FCHCC Social Cafecito Meeting", time: "8:30 AM – 10:00 AM", description: eventDescription, extraInfo: eventExtraInfo, cta: eventCta },
    { date: new Date(year, 1, 16), title: "FCHCC Social Cafecito Meeting", time: "8:30 AM – 10:00 AM", description: eventDescription, extraInfo: eventExtraInfo, cta: eventCta },
    { date: new Date(year, 2, 20), title: "FCHCC Social Cafecito Meeting", time: "8:30 AM – 10:00 AM", description: eventDescription, extraInfo: eventExtraInfo, cta: eventCta },
    { date: new Date(year, 3, 16), title: "FCHCC Social Cafecito Meeting", time: "8:30 AM – 10:00 AM", description: eventDescription, extraInfo: eventExtraInfo, cta: eventCta },
    { date: new Date(year, 3, 17), title: "FCHCC Social Cafecito Meeting", time: "8:30 AM – 10:00 AM", description: eventDescription, extraInfo: eventExtraInfo, cta: eventCta },
    { date: new Date(year, 4, 15), title: "FCHCC Social Cafecito Meeting", time: "8:30 AM – 10:00 AM", description: eventDescription, extraInfo: eventExtraInfo, cta: eventCta },
    { date: new Date(year, 5, 19), title: "FCHCC Social Cafecito Meeting", time: "8:30 AM – 10:00 AM", description: eventDescription, extraInfo: eventExtraInfo, cta: eventCta },
    { date: new Date(year, 6, 17), title: "FCHCC Social Cafecito Meeting", time: "8:30 AM – 10:00 AM", description: eventDescription, extraInfo: eventExtraInfo, cta: eventCta },
    { date: new Date(year, 7, 21), title: "FCHCC Social Cafecito Meeting", time: "8:30 AM – 10:00 AM", description: eventDescription, extraInfo: eventExtraInfo, cta: eventCta },
    { date: new Date(year, 8, 18), title: "FCHCC Social Cafecito Meeting", time: "8:30 AM – 10:00 AM", description: eventDescription, extraInfo: eventExtraInfo, cta: eventCta },
    { date: new Date(year, 9, 16), title: "FCHCC Social Cafecito Meeting", time: "8:30 AM – 10:00 AM", description: eventDescription, extraInfo: eventExtraInfo, cta: eventCta },
    { date: new Date(year, 10, 20), title: "FCHCC Social Cafecito Meeting", time: "8:30 AM – 10:00 AM", description: eventDescription, extraInfo: eventExtraInfo, cta: eventCta },
    { date: new Date(year, 11, 18), title: "FCHCC Social Cafecito Meeting", time: "8:30 AM – 10:00 AM", description: eventDescription, extraInfo: eventExtraInfo, cta: eventCta },
  ];

  // Calculate grid days for Weekly View — show week of first meeting in selected month
  const firstEventInMonth = events.find(e => e.date.getMonth() === currentMonth && e.date.getFullYear() === year);
  const weekAnchorDate = firstEventInMonth ? firstEventInMonth.date : currentDate;
  const currentWeekStart = startOfWeek(weekAnchorDate);
  const currentWeekEnd = endOfWeek(weekAnchorDate);

  return (
    <div className="w-full max-w-360 mx-auto min-h-screen p-4 sm:p-6 mb-10 md:mb-20">
      <Tabs defaultValue="monthly" className="w-full space-y-8">

        {/* View Switcher (inside Tabs) */}
        <div className="flex justify-center border-b border-gray-100 py-1 overflow-x-auto no-scrollbar">
          <TabsList className="h-auto p-0 gap-4 sm:gap-8 flex-nowrap whitespace-nowrap">
            <TabsTrigger
              value="monthly"
              className="data-[state=active]:border-b  rounded-none px-2 pb-4 text-[#1E88E5] font-semibold flex gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                <path d="M22.743 2.97705H19.0518C18.9778 2.97705 18.9069 3.00524 18.8547 3.05543C18.8024 3.10561 18.773 3.17368 18.773 3.24465C18.773 3.31562 18.8024 3.38369 18.8547 3.43387C18.9069 3.48406 18.9778 3.51225 19.0518 3.51225H22.743C22.7774 3.51225 22.8049 3.53865 22.8049 3.57165V7.39365H2.23426V3.57165C2.23442 3.55584 2.24108 3.54073 2.25278 3.52961C2.26449 3.51849 2.28029 3.51225 2.29676 3.51225H6.18676C6.26069 3.51225 6.33159 3.48406 6.38386 3.43387C6.43614 3.38369 6.46551 3.31562 6.46551 3.24465C6.46551 3.17368 6.43614 3.10561 6.38386 3.05543C6.33159 3.00524 6.26069 2.97705 6.18676 2.97705H2.29676C2.13248 2.97721 1.97497 3.03989 1.85875 3.15134C1.74254 3.2628 1.67709 3.41395 1.67676 3.57165V21.2921C1.67676 21.6209 1.95488 21.8879 2.29676 21.8879H22.743C22.9074 21.8875 23.0649 21.8246 23.181 21.7129C23.2972 21.6012 23.3624 21.4499 23.3624 21.2921V3.57165C23.3621 3.41405 23.2967 3.263 23.1806 3.15156C23.0645 3.04011 22.9072 2.97737 22.743 2.97705ZM22.743 21.3527H2.29676C2.2885 21.3527 2.28032 21.3511 2.27269 21.348C2.26507 21.345 2.25815 21.3405 2.25234 21.3349C2.24653 21.3292 2.24194 21.3225 2.23883 21.3152C2.23573 21.3078 2.23418 21.3 2.23426 21.2921V7.92825H22.8049V21.2915C22.805 21.2994 22.8036 21.3073 22.8006 21.3146C22.7975 21.322 22.793 21.3288 22.7872 21.3344C22.7815 21.3401 22.7746 21.3447 22.767 21.3478C22.7594 21.3509 22.7513 21.3526 22.743 21.3527Z" fill="#1E88E5" />
                <path d="M8.85723 3.51242H16.2972C16.3712 3.51242 16.4421 3.48423 16.4943 3.43404C16.5466 3.38386 16.576 3.31579 16.576 3.24482C16.576 3.17385 16.5466 3.10579 16.4943 3.0556C16.4421 3.00542 16.3712 2.97722 16.2972 2.97722H8.85723C8.7833 2.97722 8.7124 3.00542 8.66012 3.0556C8.60784 3.10579 8.57848 3.17385 8.57848 3.24482C8.57848 3.31579 8.60784 3.38386 8.66012 3.43404C8.7124 3.48423 8.7833 3.51242 8.85723 3.51242ZM7.59223 5.36642C7.74598 5.36642 7.87098 5.24642 7.87098 5.09882V1.50002C7.87098 1.46488 7.86377 1.43008 7.84976 1.39762C7.83575 1.36515 7.81522 1.33565 7.78933 1.3108C7.76345 1.28595 7.73272 1.26624 7.6989 1.25279C7.66508 1.23934 7.62883 1.23242 7.59223 1.23242C7.55562 1.23242 7.51937 1.23934 7.48555 1.25279C7.45173 1.26624 7.421 1.28595 7.39512 1.3108C7.36924 1.33565 7.3487 1.36515 7.3347 1.39762C7.32069 1.43008 7.31348 1.46488 7.31348 1.50002V5.09942C7.31348 5.24702 7.43848 5.36642 7.59223 5.36642ZM17.6885 5.36642C17.8422 5.36642 17.9672 5.24642 17.9672 5.09882V1.50002C17.9672 1.42905 17.9379 1.36098 17.8856 1.3108C17.8333 1.26062 17.7624 1.23242 17.6885 1.23242C17.6145 1.23242 17.5436 1.26062 17.4914 1.3108C17.4391 1.36098 17.4097 1.42905 17.4097 1.50002V5.09942C17.4097 5.24702 17.5341 5.36642 17.6885 5.36642Z" fill="#1E88E5" />
                <path d="M6.15148 11.9765C6.99993 11.9765 7.68773 11.3162 7.68773 10.5017C7.68773 9.68715 6.99993 9.02686 6.15148 9.02686C5.30304 9.02686 4.61523 9.68715 4.61523 10.5017C4.61523 11.3162 5.30304 11.9765 6.15148 11.9765Z" fill="#1E88E5" />
                <path d="M10.5665 11.9765C11.415 11.9765 12.1028 11.3162 12.1028 10.5017C12.1028 9.68715 11.415 9.02686 10.5665 9.02686C9.71808 9.02686 9.03027 9.68715 9.03027 10.5017C9.03027 11.3162 9.71808 11.9765 10.5665 11.9765Z" fill="#1E88E5" />
                <path d="M14.9806 11.9765C15.829 11.9765 16.5168 11.3162 16.5168 10.5017C16.5168 9.68715 15.829 9.02686 14.9806 9.02686C14.1321 9.02686 13.4443 9.68715 13.4443 10.5017C13.4443 11.3162 14.1321 11.9765 14.9806 11.9765Z" fill="#1E88E5" />
                <path d="M6.15148 16.0834C6.99993 16.0834 7.68773 15.4231 7.68773 14.6086C7.68773 13.7941 6.99993 13.1338 6.15148 13.1338C5.30304 13.1338 4.61523 13.7941 4.61523 14.6086C4.61523 15.4231 5.30304 16.0834 6.15148 16.0834Z" fill="#1E88E5" />
                <path d="M10.5665 16.0834C11.415 16.0834 12.1028 15.4231 12.1028 14.6086C12.1028 13.7941 11.415 13.1338 10.5665 13.1338C9.71808 13.1338 9.03027 13.7941 9.03027 14.6086C9.03027 15.4231 9.71808 16.0834 10.5665 16.0834Z" fill="#1E88E5" />
                <path d="M14.9806 16.0834C15.829 16.0834 16.5168 15.4231 16.5168 14.6086C16.5168 13.7941 15.829 13.1338 14.9806 13.1338C14.1321 13.1338 13.4443 13.7941 13.4443 14.6086C13.4443 15.4231 14.1321 16.0834 14.9806 16.0834Z" fill="#1E88E5" />
                <path d="M6.15148 20.1908C6.99993 20.1908 7.68773 19.5305 7.68773 18.716C7.68773 17.9015 6.99993 17.2412 6.15148 17.2412C5.30304 17.2412 4.61523 17.9015 4.61523 18.716C4.61523 19.5305 5.30304 20.1908 6.15148 20.1908Z" fill="#1E88E5" />
                <path d="M10.5665 20.1908C11.415 20.1908 12.1028 19.5305 12.1028 18.716C12.1028 17.9015 11.415 17.2412 10.5665 17.2412C9.71808 17.2412 9.03027 17.9015 9.03027 18.716C9.03027 19.5305 9.71808 20.1908 10.5665 20.1908Z" fill="#1E88E5" />
                <path d="M14.9806 20.1908C15.829 20.1908 16.5168 19.5305 16.5168 18.716C16.5168 17.9015 15.829 17.2412 14.9806 17.2412C14.1321 17.2412 13.4443 17.9015 13.4443 18.716C13.4443 19.5305 14.1321 20.1908 14.9806 20.1908Z" fill="#1E88E5" />
                <path d="M19.2921 11.9765C20.1406 11.9765 20.8284 11.3162 20.8284 10.5017C20.8284 9.68715 20.1406 9.02686 19.2921 9.02686C18.4437 9.02686 17.7559 9.68715 17.7559 10.5017C17.7559 11.3162 18.4437 11.9765 19.2921 11.9765Z" fill="#1E88E5" />
                <path d="M19.2921 16.0834C20.1406 16.0834 20.8284 15.4231 20.8284 14.6086C20.8284 13.7941 20.1406 13.1338 19.2921 13.1338C18.4437 13.1338 17.7559 13.7941 17.7559 14.6086C17.7559 15.4231 18.4437 16.0834 19.2921 16.0834Z" fill="#1E88E5" />
                <path d="M19.2921 17.2412C19.0904 17.2412 18.8906 17.2794 18.7042 17.3535C18.5178 17.4276 18.3485 17.5362 18.2058 17.6732C18.0632 17.8101 17.95 17.9727 17.8728 18.1516C17.7956 18.3306 17.7559 18.5223 17.7559 18.716C17.7559 18.9097 17.7956 19.1015 17.8728 19.2804C17.95 19.4593 18.0632 19.6219 18.2058 19.7589C18.3485 19.8958 18.5178 20.0044 18.7042 20.0785C18.8906 20.1527 19.0904 20.1908 19.2921 20.1908C19.6995 20.1908 20.0903 20.0354 20.3784 19.7589C20.6665 19.4823 20.8284 19.1072 20.8284 18.716C20.8284 18.3249 20.6665 17.9497 20.3784 17.6732C20.0903 17.3966 19.6995 17.2412 19.2921 17.2412ZM19.2921 19.5704C19.0562 19.5701 18.83 19.48 18.6631 19.3198C18.4963 19.1597 18.4024 18.9425 18.4021 18.716C18.4021 18.245 18.8015 17.8616 19.2921 17.8616C19.5224 17.8699 19.7403 17.9635 19.9002 18.1229C20.0601 18.2822 20.1494 18.4948 20.1494 18.716C20.1494 18.9372 20.0601 19.1498 19.9002 19.3092C19.7403 19.4685 19.5224 19.5621 19.2921 19.5704Z" fill="#1E88E5" />
              </svg> Monthly View
            </TabsTrigger>
            <TabsTrigger
              value="weekly"
              className="data-[state=active]:border-b-10  rounded-none px-2 pb-4 text-[#1E88E5] font-semibold flex gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M21.833 2.97705H18.2894C18.2184 2.97705 18.1503 3.00524 18.1002 3.05543C18.05 3.10561 18.0218 3.17368 18.0218 3.24465C18.0218 3.31562 18.05 3.38369 18.1002 3.43387C18.1503 3.48406 18.2184 3.51225 18.2894 3.51225H21.833C21.866 3.51225 21.8924 3.53865 21.8924 3.57165V7.39365H2.14457V3.57165C2.14473 3.55584 2.15112 3.54073 2.16236 3.52961C2.17359 3.51849 2.18877 3.51225 2.20457 3.51225H5.93898C6.00995 3.51225 6.07801 3.48406 6.1282 3.43387C6.17838 3.38369 6.20658 3.31562 6.20658 3.24465C6.20658 3.17368 6.17838 3.10561 6.1282 3.05543C6.07801 3.00524 6.00995 2.97705 5.93898 2.97705H2.20457C2.04687 2.97721 1.89566 3.03989 1.78409 3.15134C1.67252 3.2628 1.60969 3.41395 1.60938 3.57165V21.2921C1.60938 21.6209 1.87637 21.8879 2.20457 21.8879H21.833C21.9908 21.8875 22.142 21.8246 22.2535 21.7129C22.365 21.6012 22.4276 21.4499 22.4276 21.2921V3.57165C22.4273 3.41405 22.3645 3.263 22.2531 3.15156C22.1416 3.04011 21.9906 2.97737 21.833 2.97705ZM21.833 21.3527H2.20457C2.19664 21.3527 2.18879 21.3511 2.18147 21.348C2.17416 21.345 2.16751 21.3405 2.16193 21.3349C2.15636 21.3292 2.15195 21.3225 2.14897 21.3152C2.14599 21.3078 2.1445 21.3 2.14457 21.2921V7.92825H21.8924V21.2915C21.8925 21.2994 21.8911 21.3073 21.8882 21.3146C21.8853 21.322 21.881 21.3288 21.8754 21.3344C21.8699 21.3401 21.8633 21.3447 21.856 21.3478C21.8487 21.3509 21.8409 21.3526 21.833 21.3527Z" fill="#6B7280" />
                <path d="M8.50251 3.51242H15.6449C15.7159 3.51242 15.7839 3.48423 15.8341 3.43404C15.8843 3.38386 15.9125 3.31579 15.9125 3.24482C15.9125 3.17385 15.8843 3.10579 15.8341 3.0556C15.7839 3.00542 15.7159 2.97722 15.6449 2.97722H8.50251C8.43154 2.97722 8.36347 3.00542 8.31329 3.0556C8.2631 3.10579 8.23491 3.17385 8.23491 3.24482C8.23491 3.31579 8.2631 3.38386 8.31329 3.43404C8.36347 3.48423 8.43154 3.51242 8.50251 3.51242ZM7.28811 5.36642C7.43571 5.36642 7.55571 5.24642 7.55571 5.09882V1.50002C7.55571 1.46488 7.54879 1.43008 7.53534 1.39762C7.52189 1.36515 7.50218 1.33565 7.47733 1.3108C7.45248 1.28595 7.42298 1.26624 7.39051 1.25279C7.35805 1.23934 7.32325 1.23242 7.28811 1.23242C7.25297 1.23242 7.21817 1.23934 7.1857 1.25279C7.15323 1.26624 7.12374 1.28595 7.09889 1.3108C7.07404 1.33565 7.05433 1.36515 7.04088 1.39762C7.02743 1.43008 7.02051 1.46488 7.02051 1.50002V5.09942C7.02051 5.24702 7.14051 5.36642 7.28811 5.36642ZM16.9805 5.36642C17.1281 5.36642 17.2481 5.24642 17.2481 5.09882V1.50002C17.2481 1.42905 17.2199 1.36098 17.1697 1.3108C17.1195 1.26062 17.0515 1.23242 16.9805 1.23242C16.9095 1.23242 16.8415 1.26062 16.7913 1.3108C16.7411 1.36098 16.7129 1.42905 16.7129 1.50002V5.09942C16.7129 5.24702 16.8323 5.36642 16.9805 5.36642Z" fill="#6B7280" />
                <path d="M5.90449 11.9765C6.719 11.9765 7.37929 11.3162 7.37929 10.5017C7.37929 9.68715 6.719 9.02686 5.90449 9.02686C5.08998 9.02686 4.42969 9.68715 4.42969 10.5017C4.42969 11.3162 5.08998 11.9765 5.90449 11.9765Z" fill="#6B7280" />
                <path d="M10.1428 11.9765C10.9573 11.9765 11.6176 11.3162 11.6176 10.5017C11.6176 9.68715 10.9573 9.02686 10.1428 9.02686C9.32826 9.02686 8.66797 9.68715 8.66797 10.5017C8.66797 11.3162 9.32826 11.9765 10.1428 11.9765Z" fill="#6B7280" />
                <path d="M14.3811 11.9765C15.1956 11.9765 15.8559 11.3162 15.8559 10.5017C15.8559 9.68715 15.1956 9.02686 14.3811 9.02686C13.5665 9.02686 12.9062 9.68715 12.9062 10.5017C12.9062 11.3162 13.5665 11.9765 14.3811 11.9765Z" fill="#6B7280" />
                <path d="M5.90449 13.1338C5.51335 13.1338 5.13823 13.2892 4.86165 13.5657C4.58507 13.8423 4.42969 14.2174 4.42969 14.6086C4.42969 14.9997 4.58507 15.3749 4.86165 15.6514C5.13823 15.928 5.51335 16.0834 5.90449 16.0834C6.29563 16.0834 6.67075 15.928 6.94733 15.6514C7.22391 15.3749 7.37929 14.9997 7.37929 14.6086C7.37929 14.2174 7.22391 13.8423 6.94733 13.5657C6.67075 13.2892 6.29563 13.1338 5.90449 13.1338ZM5.90449 15.4624C5.67798 15.4621 5.46085 15.372 5.30069 15.2118C5.14052 15.0516 5.05041 14.8345 5.05009 14.608C5.05009 14.137 5.43349 13.7536 5.90449 13.7536C6.12555 13.7619 6.33479 13.8555 6.48826 14.0148C6.64172 14.1742 6.72746 14.3868 6.72746 14.608C6.72746 14.8292 6.64172 15.0418 6.48826 15.2011C6.33479 15.3605 6.12555 15.4541 5.90449 15.4624ZM10.1429 13.1338C9.75175 13.1338 9.37663 13.2892 9.10005 13.5657C8.82347 13.8423 8.66809 14.2174 8.66809 14.6086C8.66809 14.9997 8.82347 15.3749 9.10005 15.6514C9.37663 15.928 9.75175 16.0834 10.1429 16.0834C10.534 16.0834 10.9091 15.928 11.1857 15.6514C11.4623 15.3749 11.6177 14.9997 11.6177 14.6086C11.6177 14.2174 11.4623 13.8423 11.1857 13.5657C10.9091 13.2892 10.534 13.1338 10.1429 13.1338ZM10.1429 15.4624C9.91638 15.4621 9.69925 15.372 9.53909 15.2118C9.37892 15.0516 9.28881 14.8345 9.28849 14.608C9.28849 14.137 9.67189 13.7536 10.1429 13.7536C10.6139 13.7536 10.9973 14.137 10.9973 14.608C10.997 14.8345 10.9069 15.0516 10.7467 15.2118C10.5865 15.372 10.3694 15.4621 10.1429 15.4624ZM14.3807 13.1338C13.9895 13.1338 13.6144 13.2892 13.3378 13.5657C13.0613 13.8423 12.9059 14.2174 12.9059 14.6086C12.9059 14.9997 13.0613 15.3749 13.3378 15.6514C13.6144 15.928 13.9895 16.0834 14.3807 16.0834C14.7718 16.0834 15.147 15.928 15.4235 15.6514C15.7001 15.3749 15.8555 14.9997 15.8555 14.6086C15.8555 14.2174 15.7001 13.8423 15.4235 13.5657C15.147 13.2892 14.7718 13.1338 14.3807 13.1338ZM14.3807 15.4624C14.1542 15.4621 13.937 15.372 13.7769 15.2118C13.6167 15.0516 13.5266 14.8345 13.5263 14.608C13.5263 14.137 13.9097 13.7536 14.3807 13.7536C14.6017 13.7619 14.811 13.8555 14.9645 14.0148C15.1179 14.1742 15.2037 14.3868 15.2037 14.608C15.2037 14.8292 15.1179 15.0418 14.9645 15.2011C14.811 15.3605 14.6017 15.4541 14.3807 15.4624ZM5.90449 17.2408C5.71081 17.2408 5.51904 17.2789 5.34011 17.3531C5.16118 17.4272 4.99859 17.5358 4.86165 17.6727C4.7247 17.8097 4.61607 17.9723 4.54195 18.1512C4.46783 18.3301 4.42969 18.5219 4.42969 18.7156C4.42969 18.9093 4.46783 19.101 4.54195 19.28C4.61607 19.4589 4.7247 19.6215 4.86165 19.7584C4.99859 19.8954 5.16118 20.004 5.34011 20.0781C5.51904 20.1522 5.71081 20.1904 5.90449 20.1904C6.29563 20.1904 6.67075 20.035 6.94733 19.7584C7.22391 19.4819 7.37929 19.1067 7.37929 18.7156C7.37929 18.3244 7.22391 17.9493 6.94733 17.6727C6.67075 17.3962 6.29563 17.2408 5.90449 17.2408ZM5.90449 19.57C5.67798 19.5697 5.46085 19.4796 5.30069 19.3194C5.14052 19.1592 5.05041 18.9421 5.05009 18.7156C5.05009 18.2446 5.43349 17.8612 5.90449 17.8612C6.37549 17.8612 6.75889 18.2446 6.75889 18.7156C6.75889 19.1866 6.37549 19.57 5.90449 19.57ZM10.1429 17.2408C9.75175 17.2408 9.37663 17.3962 9.10005 17.6727C8.82347 17.9493 8.66809 18.3244 8.66809 18.7156C8.66809 19.1067 8.82347 19.4819 9.10005 19.7584C9.37663 20.035 9.75175 20.1904 10.1429 20.1904C10.534 20.1904 10.9091 20.035 11.1857 19.7584C11.4623 19.4819 11.6177 19.1067 11.6177 18.7156C11.6177 18.3244 11.4623 17.9493 11.1857 17.6727C10.9091 17.3962 10.534 17.2408 10.1429 17.2408ZM10.1429 19.57C9.91638 19.5697 9.69925 19.4796 9.53909 19.3194C9.37892 19.1592 9.28881 18.9421 9.28849 18.7156C9.28849 18.2446 9.67189 17.8612 10.1429 17.8612C10.6139 17.8612 10.9973 18.2446 10.9973 18.7156C10.9968 18.942 10.9066 19.1591 10.7465 19.3192C10.5864 19.4793 10.3693 19.5695 10.1429 19.57ZM14.3807 17.2408C13.9895 17.2408 13.6144 17.3962 13.3378 17.6727C13.0613 17.9493 12.9059 18.3244 12.9059 18.7156C12.9059 19.1067 13.0613 19.4819 13.3378 19.7584C13.6144 20.035 13.9895 20.1904 14.3807 20.1904C14.7718 20.1904 15.147 20.035 15.4235 19.7584C15.7001 19.4819 15.8555 19.1067 15.8555 18.7156C15.8555 18.3244 15.7001 17.9493 15.4235 17.6727C15.147 17.3962 14.7718 17.2408 14.3807 17.2408ZM14.3807 19.57C14.1542 19.5697 13.937 19.4796 13.7769 19.3194C13.6167 19.1592 13.5266 18.9421 13.5263 18.7156C13.5263 18.2446 13.9097 17.8612 14.3807 17.8612C14.8517 17.8612 15.2351 18.2446 15.2351 18.7156C15.2351 19.1866 14.8517 19.57 14.3807 19.57Z" fill="#6B7280" />
                <path d="M18.5197 11.9765C19.3342 11.9765 19.9945 11.3162 19.9945 10.5017C19.9945 9.68715 19.3342 9.02686 18.5197 9.02686C17.7052 9.02686 17.0449 9.68715 17.0449 10.5017C17.0449 11.3162 17.7052 11.9765 18.5197 11.9765Z" fill="#6B7280" />
                <path d="M18.5197 13.1338C18.1286 13.1338 17.7535 13.2892 17.4769 13.5657C17.2003 13.8423 17.0449 14.2174 17.0449 14.6086C17.0449 14.9997 17.2003 15.3749 17.4769 15.6514C17.7535 15.928 18.1286 16.0834 18.5197 16.0834C18.9109 16.0834 19.286 15.928 19.5626 15.6514C19.8391 15.3749 19.9945 14.9997 19.9945 14.6086C19.9945 14.2174 19.8391 13.8423 19.5626 13.5657C19.286 13.2892 18.9109 13.1338 18.5197 13.1338ZM18.5197 15.4624C18.2932 15.4621 18.0761 15.372 17.9159 15.2118C17.7558 15.0516 17.6656 14.8345 17.6653 14.608C17.6653 14.137 18.0487 13.7536 18.5197 13.7536C18.7408 13.7619 18.95 13.8555 19.1035 14.0148C19.257 14.1742 19.3427 14.3868 19.3427 14.608C19.3427 14.8292 19.257 15.0418 19.1035 15.2011C18.95 15.3605 18.7408 15.4541 18.5197 15.4624ZM18.5197 17.2408C18.326 17.2408 18.1343 17.2789 17.9553 17.3531C17.7764 17.4272 17.6138 17.5358 17.4769 17.6727C17.3399 17.8097 17.2313 17.9723 17.1572 18.1512C17.0831 18.3301 17.0449 18.5219 17.0449 18.7156C17.0449 18.9093 17.0831 19.101 17.1572 19.28C17.2313 19.4589 17.3399 19.6215 17.4769 19.7584C17.6138 19.8954 17.7764 20.004 17.9553 20.0781C18.1343 20.1522 18.326 20.1904 18.5197 20.1904C18.9109 20.1904 19.286 20.035 19.5626 19.7584C19.8391 19.4819 19.9945 19.1067 19.9945 18.7156C19.9945 18.3244 19.8391 17.9493 19.5626 17.6727C19.286 17.3962 18.9109 17.2408 18.5197 17.2408ZM18.5197 19.57C18.2932 19.5697 18.0761 19.4796 17.9159 19.3194C17.7558 19.1592 17.6656 18.9421 17.6653 18.7156C17.6653 18.2446 18.0487 17.8612 18.5197 17.8612C18.7408 17.8695 18.95 17.9631 19.1035 18.1224C19.257 18.2818 19.3427 18.4944 19.3427 18.7156C19.3427 18.9368 19.257 19.1494 19.1035 19.3087C18.95 19.4681 18.7408 19.5617 18.5197 19.57Z" fill="#6B7280" />
              </svg> Weekly View
            </TabsTrigger>
            <TabsTrigger
              value="list"
              className="data-[state=active]:border-b rounded-none px-2 pb-4 text-[#1E88E5] font-semibold flex gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M7 9V7H21V9H7ZM7 13V11H21V13H7ZM7 17V15H21V17H7ZM4 9C3.71667 9 3.47934 8.904 3.288 8.712C3.09667 8.52 3.00067 8.28267 3 8C2.99934 7.71733 3.09534 7.48 3.288 7.288C3.48067 7.096 3.718 7 4 7C4.282 7 4.51967 7.096 4.713 7.288C4.90634 7.48 5.002 7.71733 5 8C4.998 8.28267 4.902 8.52033 4.712 8.713C4.522 8.90567 4.28467 9.00133 4 9ZM4 13C3.71667 13 3.47934 12.904 3.288 12.712C3.09667 12.52 3.00067 12.2827 3 12C2.99934 11.7173 3.09534 11.48 3.288 11.288C3.48067 11.096 3.718 11 4 11C4.282 11 4.51967 11.096 4.713 11.288C4.90634 11.48 5.002 11.7173 5 12C4.998 12.2827 4.902 12.5203 4.712 12.713C4.522 12.9057 4.28467 13.0013 4 13ZM4 17C3.71667 17 3.47934 16.904 3.288 16.712C3.09667 16.52 3.00067 16.2827 3 16C2.99934 15.7173 3.09534 15.48 3.288 15.288C3.48067 15.096 3.718 15 4 15C4.282 15 4.51967 15.096 4.713 15.288C4.90634 15.48 5.002 15.7173 5 16C4.998 16.2827 4.902 16.5203 4.712 16.713C4.522 16.9057 4.28467 17.0013 4 17" fill="#6B7280" />
              </svg> List View
            </TabsTrigger>
          </TabsList>
        </div>

        {/* Shared Header with Date and Dropdown */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 px-4 sm:px-12 md:px-48">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-black">{format(currentDate, 'MMMM yyyy')}</h2>
            <div className="flex gap-2">
            </div>
          </div>

          <Select value={format(currentDate, 'MMM-yyyy')} onValueChange={handleMonthChange}>
            <SelectTrigger className="w-40 bg-slate-50 border-slate-200">
              <SelectValue placeholder="Select Month" />
            </SelectTrigger>
            <SelectContent>
              {monthOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* ======================================= */}
        {/* MONTHLY VIEW TAB */}
        {/* ======================================= */}
        <TabsContent value="monthly" className="mt-0 outline-none">
          <div className="rounded-xl w-full max-w-4xl mx-auto shadow-xl mt-8">
            {/* Orange Header */}
            <div className="bg-[#F97316] p-4 text-center rounded-t-xl">
              <h3 className="text-white text-xl sm:text-3xl tracking-tighter sm:tracking-tighter-[-0.58px] font-bold">{format(currentDate, 'MMMM yyyy')}</h3>
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 bg-[#C4C4C4]">
              {/* Day Headers */}
              {days.map((day, index) => (
                <div key={index} className="bg-[#F97316] py-2 h-16 text-center text-white text-xs font-semibold">
                  {day}
                </div>
              ))}

              {/* Date Cells */}
              {calendarDays.map((day, idx) => {
                const isCurrentMonth = isSameMonth(day, monthStart);
                const isToday = isSameDay(day, new Date());
                const dayEvents = events.filter(e => isSameDay(e.date, day));
                const cellKey = `cell-${idx}`;
                const hasEvents = dayEvents.length > 0 && isCurrentMonth;

                return (
                  <div
                    key={idx}
                    className={`min-h-[80px] sm:min-h-25 p-1 sm:p-2 relative transition-colors border border-gray-300 
                      ${!isCurrentMonth ? 'bg-slate-50 opacity-50' : hasEvents ? 'bg-[#F97316] text-white cursor-pointer hover:bg-[#e5680f]' : 'bg-white hover:bg-slate-50'}`}
                    onMouseEnter={() => hasEvents && setHoveredEvent(cellKey)}
                    onMouseLeave={() => setHoveredEvent(null)}
                  >
                    <div className={`w-6 h-6 flex items-center justify-center rounded-full text-xs font-medium 
                      ${hasEvents ? 'text-white' : isCurrentMonth ? 'text-slate-700' : 'text-slate-400'}`}>
                      {format(day, 'd')}
                    </div>

                    {/* Event dot indicator */}
                    {dayEvents.map((evt, eIdx) => (
                      <div key={eIdx} className="mt-2 text-center rounded px-1 py-0.5">
                        <span className="text-[10px] font-bold leading-tight block truncate text-white">
                          {evt.title}
                        </span>
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Event Detail Card — shows below calendar on hover */}
          {hoveredEvent && (() => {
            const idx = parseInt(hoveredEvent.replace('cell-', ''));
            const day = calendarDays[idx];
            if (!day) return null;
            const dayEvents = events.filter(e => isSameDay(e.date, day));
            if (dayEvents.length === 0) return null;

            return (
              <div className="w-full max-w-4xl mx-auto mt-4 bg-white rounded-xl shadow-2xl border border-orange-200 p-6 sm:p-8 text-left animate-in fade-in duration-200">
                {dayEvents.map((evt, eIdx) => (
                  <div key={eIdx}>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-3 h-3 rounded-full bg-[#F97316] shrink-0" />
                      <span className="text-sm font-semibold text-[#F97316] uppercase tracking-wide">{format(day, 'EEEE, MMMM d, yyyy')}</span>
                    </div>
                    <p className="text-base font-bold text-[#1E88E5] mb-1">{evt.time}</p>

                    <h4 className="text-lg font-bold text-black mb-4">{evt.title}</h4>
                    <p className="text-sm text-gray-700 leading-relaxed mb-3">{evt.description}</p>
                    <p className="text-sm text-gray-700 leading-relaxed mb-3">{evt.extraInfo}</p>
                    <p className="text-sm text-gray-500 italic leading-relaxed">{evt.cta}</p>
                  </div>
                ))}
              </div>
            );
          })()}
        </TabsContent>

        {/* ======================================= */}
        {/* WEEKLY VIEW TAB */}
        {/* ======================================= */}
        <TabsContent value="weekly" className="mt-0 outline-none">
          <WeeklyView
            events={events}
            days={days}
            currentWeekStart={currentWeekStart}
            currentWeekEnd={currentWeekEnd}
          />
        </TabsContent>

        {/* ======================================= */}
        {/* LIST VIEW TAB */}
        {/* ======================================= */}
        <TabsContent value="list" className="mt-0 outline-none">
          <ViewList events={events} />
        </TabsContent>

      </Tabs>
    </div>
  );
};

export default EventCalendar;