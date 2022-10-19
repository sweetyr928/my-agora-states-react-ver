export const Discussion = ({discussion}) => {
    const {url, author, avatarUrl, title, createdAt, answer} = discussion;

    return (
        <li class="discussion__container">
          <div class="discussion__avatar--wrapper">
            <img class="discussion__avatar--image" src={avatarUrl} alt={`avatar of ${author}`}/>
          </div>
          <div class="discussion__content">
            <h2 class="discussion__title"><a href={url}>{title}</a></h2>
            <div className="discussion__information">{`${author} / ${new Date(createdAt).toLocaleString()}`}</div>
          </div>
          <div class="discussion__answered"><p className="discussion__isAnswered">{answer ?'☑' : '☒' }</p></div>
        </li>
    );
}