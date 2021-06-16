import React from 'react'
import {
  ContainerScreen,
  Row,
  BoxColorMode,
  Col,
  TextMini,
  BoxScrollMini
} from '@fs/react-boost'
import LinksMenu from './LinksMenu'

const MasterPage: React.FC = ({ children }) => {
  const links = {
    started: [
      {
        label: 'Installation',
        to: '/start/installation'
      },
      {
        label: 'Why use this package?',
        to: '/start/why'
      }
    ],
    components: [
      {
        label: 'Box Color Mode',
        to: '/components/box-color-mode'
      },
      {
        label: 'Box File',
        to: '/components/box-file'
      },
      {
        label: 'Box Motion',
        to: '/components/box-motion'
      },
      {
        label: 'Box Overlay',
        to: '/components/box-overlay'
      },
      {
        label: 'Box Overlay Spinner',
        to: '/components/box-overlay-spinner'
      },
      {
        label: 'Box Scroll',
        to: '/components/box-scroll'
      },
      {
        label: 'Box Scroll Mini',
        to: '/components/box-scroll-mini'
      },
      {
        label: 'Col (Column)',
        to: '/components/column'
      },
      {
        label: 'Row',
        to: '/components/row'
      },
      {
        label: 'Container Screen',
        to: '/components/container-screen'
      },
      {
        label: 'File Size',
        to: '/components/file-size'
      },
      {
        label: 'Groups Hover',
        to: '/components/groups-hover'
      },
      {
        label: 'Square Check',
        to: '/components/square-check'
      },
      {
        label: 'Text Mini',
        to: '/components/text-mini'
      }
    ],
    utils: [
      {
        label: 'Collection',
        to: '/utils/collection'
      },
      {
        label: 'Disclosure',
        to: '/utils/disclosure'
      },
      {
        label: 'Loaders',
        to: '/utils/loaders'
      },
      {
        label: 'Promise Queue',
        to: '/utils/promise-queue'
      },
      {
        label: 'Str',
        to: '/utils/str'
      }
    ],
    fields: [
      {
        label: 'Boolean Field',
        to: '/unform/boolean'
      },
      {
        label: 'Box File Field',
        to: '/unform/box-file'
      },
      {
        label: 'Check Options Field',
        to: '/unform/check-options'
      },
      {
        label: 'Dropdown Options Field',
        to: '/unform/dropdown-options'
      },
      {
        label: 'Image File Field',
        to: '/unform/image-file'
      },
      {
        label: 'Input Field',
        to: '/unform/input'
      },
      {
        label: 'Select Options Field',
        to: '/unform/select-options'
      },
      {
        label: 'Textarea Field',
        to: '/unform/textarea'
      }
    ],
    hooks: [
      {
        label: 'useCollect',
        to: '/hooks/use-collect'
      },
      {
        label: 'useFieldState',
        to: '/hooks/use-field-state'
      },
      {
        label: 'usePercent',
        to: '/hooks/use-percent'
      }
    ]
  }

  return (
    <ContainerScreen>
      <Row w='100%' h='100%'>
        <BoxColorMode
          as={Col}
          h='100%'
          w={280}
          _dark={{ bg: 'gray.900' }}
          _light={{ bg: 'white' }}
        >
          <BoxScrollMini color='rgba(255,255,255,.01)'>
            <Row p={2} userSelect='none' color='primary.500'>
              <TextMini>Getting Started</TextMini>
            </Row>
            <LinksMenu links={links.started} />
            <Row p={2} userSelect='none' color='primary.500'>
              <TextMini>Components</TextMini>
            </Row>
            <LinksMenu links={links.components} />
            <Row p={2} userSelect='none' color='primary.500'>
              <TextMini>Utils</TextMini>
            </Row>
            <LinksMenu links={links.utils} />
            <Row p={2} userSelect='none' color='primary.500'>
              <TextMini>Form (Unform)</TextMini>
            </Row>
            <LinksMenu links={links.fields} />
            <Row p={2} userSelect='none' color='primary.500'>
              <TextMini>Hooks</TextMini>
            </Row>
            <LinksMenu links={links.hooks} />
          </BoxScrollMini>
        </BoxColorMode>
        <Col minH='100%' flex={1} p={4}>
          {children}
        </Col>
      </Row>
    </ContainerScreen>
  )
}

export default MasterPage
