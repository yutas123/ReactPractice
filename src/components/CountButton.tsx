interface CountButtonProps {
  count: number;
  onIncrement: () => void;
}

export default function CountButton({ count, onIncrement }: CountButtonProps) {
  return (
    <button onClick={onIncrement}>
      Clicked {count} times
    </button>
  );
}
