import s from './ActivitySkeleton.module.css'

interface Props {
  count: number
}

export default function ActivitySkeleton({ count }: Props) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div className={s.activitySkeleton} key={i}>

        </div>
      ))}
    </>

  );
}