import { useState, type ComponentType } from "react"
import { Funcs as g } from "https://cdn.jsdelivr.net/gh/AframeStudio/framer-plugins-lib/framer-cart/lib0.js"

export function HideWhenCartEmpty(Component): ComponentType {
    return (props) => {
        const [hide, setHide] = useState(true)

        g.useOnChange((items: any[]) => {
            setHide(items.length === 0)
        })

        if (hide) return null

        return <Component {...props} />
    }
}

export function HideWhenCartNotEmpty(Component): ComponentType {
    return (props) => {
        const [hide, setHide] = useState(true)

        g.useOnChange((items: any[]) => {
            setHide(items.length !== 0)
        })

        if (hide) return null

        return <Component {...props} />
    }
}
