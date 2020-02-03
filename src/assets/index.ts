const images = ['apple', 'avocado', 'banana', 'corn', 'lemon', 'lettuce', 'onion', 'strawberry']

export default async function loadImmagesSrcs() {
    const imagesSrcs: { default: any; name: string }[] = []

    await Promise.all(
        images.map(async (image) => {
            await import(`./${image}.png`).then((imgSrc) => imagesSrcs.push({ default: imgSrc.default, name: image }))
        })
    )

    return imagesSrcs
}
