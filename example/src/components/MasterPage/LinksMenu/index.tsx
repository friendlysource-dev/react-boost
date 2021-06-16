import React from 'react'
import { SimpleGrid, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

interface LinksMenuProps {
  links: Array<{
    label: string
    to: string
  }>
}

const LinksMenu: React.FC<LinksMenuProps> = ({ links }) => {
  return (
    <SimpleGrid gap={2} p={2}>
      {links.map(({ to, label }, keyLink) => (
        <Link to={to} style={{ width: '100%' }} key={`link${keyLink}`}>
          <Button justifyContent='start' variant='ghost' w='100%' size='sm'>
            {label}
          </Button>
        </Link>
      ))}
    </SimpleGrid>
  )
}

export default LinksMenu
