import React, { useState, useEffect } from 'react'

import { Board, Button, Card, WinModal } from './components'

import loadImmagesSrcs from './assets'

const App: React.FC = () => {
    const [time, setTime] = useState(0)
    const [clicks, setClicks] = useState(0)
    const [chronoActive, setChronoActive] = useState(false)

    const [images, setImages] = useState<{ default: any; name: string }[] | null>(null)
    const [visibleCards, setVisibleCards] = useState<string[]>([])
    const [wonPairs, setWonPairs] = useState<string[]>([])
    const [winModal, setWinModal] = useState(false)

    useEffect(() => {
        getImages()
    }, [])

    useEffect(() => {
        let interval: NodeJS.Timeout | null = null

        if (chronoActive) {
            interval = setInterval(() => {
                setTime((time) => time + 1)
            }, 1000)
        } else if (!chronoActive && time !== 0 && interval) {
            clearInterval(interval)
        }

        return () => {
            if (interval) clearInterval(interval)
        }
    }, [chronoActive, time])

    useEffect(() => {
        if (clicks === 1) {
            setChronoActive(true)
        }
    }, [clicks])

    useEffect(() => {
        if (visibleCards.length >= 1) setClicks(clicks + 1)

        if (visibleCards.length === 2) {
            if (visibleCards[0].split('-')[0] === visibleCards[1].split('-')[0]) {
                setWonPairs([...wonPairs, visibleCards[0], visibleCards[1]])
                setVisibleCards([])
            } else setTimeout(() => setVisibleCards([]), 600)
        }
    }, [visibleCards])

    useEffect(() => {
        if (images && wonPairs.length === images.length) {
            setWinModal(true)
            setChronoActive(false)
        }
    }, [wonPairs])

    const shuffleImages = (images: { default: any; name: string }[]) => {
        let currentIndex = images.length
        let tmpValue
        let randomIndex

        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex)
            currentIndex -= 1

            tmpValue = images[currentIndex]
            images[currentIndex] = images[randomIndex]
            images[randomIndex] = tmpValue
        }

        return images
    }

    const getImages = async () => {
        const images = await loadImmagesSrcs()

        setImages([...shuffleImages(images), ...shuffleImages(images)])
    }

    const revertCard = (image: string) => {
        if (visibleCards.length < 2) {
            setVisibleCards([...visibleCards, image])
        }
    }

    const reset = () => {
        setTime(0)
        setClicks(0)
        setChronoActive(false)
        setVisibleCards([])
        setWonPairs([])
    }

    const isCardShown = (cards: string) => wonPairs.includes(cards) || visibleCards.includes(cards)

    return (
        <main className="main">
            <Board>
                <header className="BoardHeader">
                    <div style={{ alignItems: 'flex-start' }}>
                        <h5 className="BoardTitle">Temps</h5>
                        <span className="BoardRecord">{`${
                            time / 60 < 10 ? `0${(time / 60).toFixed(0)}` : (time / 60).toFixed(0)
                        }:${time % 60 < 10 ? `0${(time % 60).toFixed(0)}` : (time % 60).toFixed(0)}`}</span>
                    </div>
                    <div style={{ alignItems: 'flex-end' }}>
                        <h5 className="BoardTitle">Clics</h5>
                        <span className="BoardRecord">{(clicks / 2).toFixed(0)}</span>
                    </div>
                </header>
                <section className="BoardSection">
                    {images &&
                        images.length > 0 &&
                        images.map((image, index) => {
                            const imgName = `${image.name}-${index}`
                            return (
                                <Card key={index} onClick={() => revertCard(imgName)}>
                                    <img
                                        className={`${isCardShown(imgName) ? 'flipped' : 'idle'}`}
                                        src={image.default}
                                        alt={image.name}
                                        width="100%"
                                        style={{ opacity: isCardShown(imgName) ? 1 : 0 }}
                                    />
                                </Card>
                            )
                        })}
                </section>
                <footer className="BoardFooter">
                    <Button onClick={reset}>Reinitialiser</Button>
                </footer>
            </Board>
            {winModal && <WinModal click={clicks} time={time} setModal={setWinModal} />}
        </main>
    )
}

export default App
