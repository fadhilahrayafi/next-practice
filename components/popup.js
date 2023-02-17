import popupStyles from '@/styles/Popup.module.scss'

export default function Popup({title, body, button}) {
    return (
        <div data-testid= "popup-age" className={popupStyles.container} >
            <div className={popupStyles.title}>{title}</div>
            <div className={popupStyles.bodyTitle}>{body.title ? body.title : ''}</div>
            <div className={popupStyles.body}>{body.main ? body.main : body}</div>
            <button>{button}</button>
        </div>
    )
}