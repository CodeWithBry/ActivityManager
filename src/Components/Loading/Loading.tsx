import s from'./Loading.module.css'

interface Props{ 
    isLoading: boolean;
}

export default function Loading({isLoading}: Props) {
  if(isLoading)return (
    <div className={s.loadingWrapper}>
        <div className={s.loadingBox}>
            <div className={s.loading}></div>
            Loading...
        </div>
    </div>
  )
}