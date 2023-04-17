function Ebutt({ isLoggedIn }) {
    if (isLoggedIn) {
        return (
            <button className="edit material-symbols-outlined">
                edit
            </button>
        )
    }
}
export default Ebutt;