
import React, { useState, useCallback } from 'react';
import { AppState } from './types';
import Background from './components/Background';
import ValentineInvitation from './components/ValentineInvitation';
import Envelope from './components/Envelope';
import Letter from './components/Letter';
import HeartConfetti from './components/HeartConfetti';

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<AppState>(AppState.INVITING);

  const handleAccept = useCallback(() => {
    setCurrentStep(AppState.ENVELOPE);
  }, []);

  const handleEnvelopeFinished = useCallback(() => {
    setCurrentStep(AppState.READING);
  }, []);

  return (
    <main className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)] px-4">
      <Background />
      
      {currentStep === AppState.INVITING && (
        <ValentineInvitation onAccept={handleAccept} />
      )}

      {currentStep === AppState.ENVELOPE && (
        <>
          <HeartConfetti />
          <Envelope onFinished={handleEnvelopeFinished} />
        </>
      )}

      {currentStep === AppState.READING && (
        <Letter />
      )}
    </main>
  );
};

export default App;
