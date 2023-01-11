import {useState, useEffect} from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

function useTime(unixTimestamp: number) {
  const [timeLabel, setTimeLabel] = useState('');

  useEffect(() => {
    const time = dayjs.unix(unixTimestamp);
    setTimeLabel(time.fromNow());
  }, [unixTimestamp]);

  return timeLabel;
}

export default useTime;
