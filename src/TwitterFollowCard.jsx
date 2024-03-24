export function TwitterFollowCard({userName, name}){
    return(
        <article>
            <header>
                <img src="../public/imagenes/si.jpg" alt="" />
                <div>
                    <strong>{name}</strong>
                    <span>{userName}</span>
                </div>
            </header>
            <aside>
                <button>Seguir</button>
            </aside>
        </article>
    )
}