import { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{ isActive: boolean; onClick: () => void }>;

export default function TabButton({ children, isActive, onClick }: Props) {
  if (isActive) {
    return <b>{children}</b>;
  }
  return (
    <button
      onClick={() => {
        onClick();
      }}
    >
      {children}
    </button>
  );
}
