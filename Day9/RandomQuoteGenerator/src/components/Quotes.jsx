import { useEffect, useState } from "react";
import { IoReload } from "react-icons/io5";

function Quotes() {
    const [quotes, setQuotes] = useState([]);
    const [quote, setQuote] = useState({
        id: 1,
        quote: "Life isn't about getting and having, it's about giving and being.",
        author: "Kevin Kruse"
    });

    useEffect(() => {
        fetch('https://dummyjson.com/quotes')
        .then(res => res.json())
        .then(data => {
        setQuotes(data.quotes);
        })
        .catch(err => console.error("Error fetching quotes:", err));
    }, []);

    const handleNewQuote = () => {
        if (quotes.length > 0) {
          const randomIndex = Math.floor(Math.random() * quotes.length);
            setQuote(quotes[randomIndex]);
        }
    };

    return (
        <div className="Container">
            <div className="quote">
                {quote.quote}
            </div>
            <div>
                <div className="line"></div>
                <div className="bottom">
                    <div className="author">— {quote.author}</div>
                    <div className="icon" onClick={handleNewQuote}>
                        <IoReload />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Quotes;
