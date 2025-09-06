import s from './SkeletonDays.module.css'

type Props = {
    count: number;
}

function SkeletonDays({ count }: Props) {
    return (<>
        {
            Array.from({ length: count }).map((_) => <div className={s.skeletonDay}></div>)
        }
    </>)
}

export default SkeletonDays