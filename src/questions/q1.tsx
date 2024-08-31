import { FC } from 'react';

import { SlideNextButton } from '../nextButton';
import { SlidePrevButton } from '../prevButton';
import { QuestionProps } from './types';

export const Q1: FC<QuestionProps> = ({first = false, last = false}) => (
    <div className="w-screen h-screen bg-gray-300">
      <div className='py-8'>
      "あなたの名前は？"
      </div>
      {!first && <SlidePrevButton />}
      {!last && <SlideNextButton />}
    </div>
)