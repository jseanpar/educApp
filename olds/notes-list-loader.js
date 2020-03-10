import React from 'react'
import ContentLoader, { Rect, Circle } from 'react-content-loader/native'

const NotesListLoader = () => (
    <ContentLoader speed = { 3 } height = { 320 } >
        <Rect x="32" y="20" rx="4" ry="4" width="100" height="10" /> 
        <Rect x="240" y="20" rx="4" ry="4" width="50" height="10" /> 
        <Rect x="32" y="40" rx="4" ry="4" width="190" height="10" /> 
        <Circle cx="282" cy="44" r="7" /> 
        <Rect x="32" y="60" rx="4" ry="4" width="190" height="10" /> 
        <Rect x="32" y="80" rx="4" ry="4" width="140" height="10" />
        <Rect x="35" y="100" rx="4" ry="4" width="260" height="1" />

        <Rect x="32" y="120" rx="4" ry="4" width="100" height="10" /> 
        <Rect x="240" y="120" rx="4" ry="4" width="50" height="10" /> 
        <Rect x="32" y="140" rx="4" ry="4" width="190" height="10" />
        <Circle cx="282" cy="144" r="7" /> 
        <Rect x="32" y="160" rx="4" ry="4" width="190" height="10" /> 
        <Rect x="32" y="180" rx="4" ry="4" width="140" height="10" /> 
        <Rect x="32" y="200" rx="4" ry="4" width="260" height="1" />

        <Rect x="32" y="220" rx="4" ry="4" width="100" height="10" /> 
        <Rect x="240" y="220" rx="4" ry="4" width="50" height="10" /> 
        <Rect x="32" y="240" rx="4" ry="4" width="190" height="10" />
        <Circle cx="282" cy="244" r="7" /> 
        <Rect x="32" y="260" rx="4" ry="4" width="190" height="10" /> 
        <Rect x="32" y="280" rx="4" ry="4" width="140" height="10" /> 
        <Rect x="32" y="300" rx="4" ry="4" width="260" height="1" />
    </ContentLoader>
)

export default NotesListLoader