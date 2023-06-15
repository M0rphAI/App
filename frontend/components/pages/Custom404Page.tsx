import Button from "../subcomponents/Button"

const Custom404Page = () => {
    return (
        <main className="custom-404">
            <h1>Lost in Space</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus blandit sapien felis, molestie molestie tellus elementum quis.</p>
            <Button
                type="primary"
                arrow={true}
                link="/"
            >Back Home</Button>
            <img src="/images/404_image.png" alt="Error 404 Image" />
        </main>
    )
}

export default Custom404Page