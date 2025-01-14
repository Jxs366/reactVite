export function TwitterFollowCard({userName, name, isFollowing}){
    return(
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img 
                className="tw-followCard-avatar"
                src={`https://unavatar.io/twitter/${userName}`}
                alt="Avatar del usuario" />
                <div className="tw-followCard-user">
                    <strong>{name}</strong>
                    <span className="tw-followCard-userName">@{userName}</span>
                </div>
            </header>
            <aside className="tw-followCard-button">
                <button>Seguir</button>
            </aside>
        </article>
    )
}