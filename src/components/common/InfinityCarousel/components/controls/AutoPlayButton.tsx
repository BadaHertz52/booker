import Image from 'next/image';
import React from 'react';

import PauseIcon from '@/images/pause.svg';
import PlayIcon from '@/images/play.svg';

export interface AutoPlayButtonProps {
  isPlaying: boolean;
  disabled: boolean;
  handlePlayButtonClick: () => void;
}

const AutoPlayButton = ({ isPlaying, disabled, handlePlayButtonClick }: AutoPlayButtonProps) => {
  return (
    <button onClick={handlePlayButtonClick} disabled={disabled}>
      <Image src={isPlaying ? PauseIcon : PlayIcon} width={18} alt="" />
    </button>
  );
};

export default AutoPlayButton;
