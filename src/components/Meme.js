import { useState, useEffect } from 'react'

function Meme() {

    // const [memeImage, setMemeImage] = useState("");
    const [meme, setMeme] = useState({
        topText: "Y'all got any more",
        bottomText: "of that JavaScript?",
        randomImage: "https://i.imgflip.com/21uy0f.jpg"
    })

    const [allMemes, setAllMemes] = useState([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch('https://api.imgflip.com/get_memes');
    //             if (!response.ok) {
    //                 throw new Error('Request Failed at API level');
    //             }
    //             const json = await response.json();
    //             setAllMemes(json.data.memes);
    //             // console.log(allMemes);
    //         }

    //         catch {
    //             throw new Error('Request Failed before API level')
    //         }
    //     }
    //     fetchData();
    // }, [])

    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then(response => response.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function randomNumberGenerator(n) {
        return Math.floor(Math.random() * n);
    }

    function getRandomMeme(event) {
        event.preventDefault();
        let randomIndex = randomNumberGenerator(100);
        let imageUrl = allMemes[randomIndex].url;
        setMeme((prevMeme) => {
            return {
                ...prevMeme,
                randomImage: imageUrl
            };
        })
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        setMeme((prevMeme) => {
            return {
                ...prevMeme,
                [name]: value
            };
        })
    }

    return (
        <div className="meme-component">
            <div className="meme-form">
                <div className="meme-form--inputs">
                    <input
                        type="text"
                        className="meme-form--input"
                        name="topText"
                        id="topText"
                        value={meme.topText}
                        required
                        placeholder="Y'all got any more "
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        className="meme-form--input"
                        name="bottomText"
                        id="bottomText"
                        value={meme.bottomText}
                        required
                        placeholder="of that JavaScript?"
                        onChange={handleInputChange}
                    />
                </div>
                <button
                    onClick={getRandomMeme}
                    className="meme-form--button"
                >
                    Get a new meme image 🖼
                </button>
                <div className="meme">
                    <img src={meme.randomImage} alt="A random meme" className="meme-form--image" />
                    <h2 className="meme--text top">{meme.topText}</h2>
                    <h2 className="meme--text bottom">{meme.bottomText}</h2>
                </div>
            </div>
        </div>
    );
}

export default Meme;