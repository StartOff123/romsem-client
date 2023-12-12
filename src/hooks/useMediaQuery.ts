import React from 'react'

export function useMediaQuery(query: number): boolean {
    const getMatches = (query: number): boolean => {
        if (typeof window !== 'undefined') {
            return window.matchMedia(`(max-width: ${query}px)`).matches
        }
        return false
    }

    const [matches, setMatches] = React.useState<boolean>(getMatches(query))

    React.useEffect(() => {
        const matchMedia = window.matchMedia(`(max-width: ${query}px)`)

        const handleChange = () => {
            setMatches(getMatches(query))
        }

        handleChange()

        if (matchMedia.addListener) {
            matchMedia.addListener(handleChange)
        } else {
            matchMedia.addEventListener('change', handleChange)
        }

        return () => {
            if (matchMedia.removeListener) {
                matchMedia.removeListener(handleChange)
            } else {
                matchMedia.removeEventListener('change', handleChange)
            }
        }
    }, [query])

    return matches
}