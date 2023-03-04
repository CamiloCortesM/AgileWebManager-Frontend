import './style.css'

export const AddTarjet = () => {

    return (
        <div className="add-tarjet">
            <input
                className="add-tarjet__area"
                placeholder="Enter a title for your card"
                required
            />
        </div>
    )
}
