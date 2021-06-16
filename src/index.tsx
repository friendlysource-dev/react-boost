import * as React from 'react'
import styles from './styles.module.css'

export * as Helpers from './helpers'
export * as Hooks from './hooks'
export * as Icons from './icons'
export * from './fields'

export { FormProvider } from './providers/FormProvider'

export { default as BoxColorMode } from './chakra-ui/BoxColorMode'
export { default as BoxFile } from './chakra-ui/BoxFile'
export { default as BoxMotion } from './chakra-ui/BoxMotion'
export { default as BoxOverlay } from './chakra-ui/BoxOverlay'
export { default as BoxOverlaySpinner } from './chakra-ui/BoxOverlaySpinner'
export { default as BoxScrollMini } from './chakra-ui/BoxScrollMini'
export { default as BoxScroll } from './chakra-ui/BoxScroll'
export { default as Col } from './chakra-ui/Col'
export { default as ContainerScreen } from './chakra-ui/ContainerScreen'
export { default as FileSize } from './chakra-ui/FileSize'
export { default as Row } from './chakra-ui/Row'
export { default as SquareCheck } from './chakra-ui/SquareCheck'
export { default as TextMini } from './chakra-ui/TextMini'
export { default as SlideDownGroupHover } from './chakra-ui/GroupHover/SlideDownGroupHover'
export { default as SlideLeftGroupHover } from './chakra-ui/GroupHover/SlideLeftGroupHover'
export { default as SlideRightGroupHover } from './chakra-ui/GroupHover/SlideRightGroupHover'
export { default as SlideUpGroupHover } from './chakra-ui/GroupHover/SlideUpGroupHover'
export { default as Modal } from './chakra-ui/Modal'

interface Props {
  text: string
}

export const ExampleComponent = ({ text }: Props) => {
  return <div className={styles.test}>Example Component: {text}</div>
}
