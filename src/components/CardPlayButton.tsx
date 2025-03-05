import { Pause, Play } from './Player'

interface CardPlayButtonProps {
  id: string;
}

export function CardPlayButton({ id }: CardPlayButtonProps) {
  return (
    <div className="card-play-button rounded-full bg-green-500 p-4">
      <Play />
    </div>
  )
}