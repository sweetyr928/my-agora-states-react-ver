export const Form = () => {
    return (
        <section className="form__container">
            <form action="" method="get" className="form">
                <div className="form__input--wrapper">
                <div className="form__input--name">
                    <label className = "nameLabel" for="name">Enter your name: </label>
                    <input className = "nameInput" type="text" name="name" id="name" required/>
                </div>
                <div className="form__input--title">
                    <label className = "titleLabel" for="name">Enter your title: </label>
                    <input className = "titleInput" type="text" name="title" id="title" required/>
                </div>
                <div className="form__textbox">
                    <label className = "questionLabel" for="story">Your question: </label>
                    <textarea className = "questionInput" id="story" name="story" placeholder="질문을 작성하세요" required></textarea>
                </div>
                </div>
                <div className="form__submit">
                <input className="submitBtn" type="submit" value="submit"/>
                </div>
            </form>
        </section>
    )
}