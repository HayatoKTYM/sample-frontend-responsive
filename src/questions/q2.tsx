import { FC } from 'react';

import { SlideNextButton } from '../nextButton';
import { SlidePrevButton } from '../prevButton';
import { QuestionProps } from './types';

export const Q2: FC<QuestionProps> = ({first = false, last = false}) => (
    <div className="w-screen h-screen bg-gray-300">
      <div>
      "あなたの性別は？"
      </div>
      {!first && <SlidePrevButton />}
      {!last && <SlideNextButton />}
    </div>
)