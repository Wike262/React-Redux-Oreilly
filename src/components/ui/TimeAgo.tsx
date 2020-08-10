import React from 'react';
import { ago } from '../../lib/time-helpers';

interface Props {
	timestamp: string;
}

const TimeAgo = ({ timestamp }: Props) => {
	return <div className="time-ago">{ago(timestamp)}</div>;
};

export default TimeAgo;
