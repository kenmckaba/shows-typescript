import { Button } from '@chakra-ui/react'

interface CoolButtonProps {
  variant: 'small' | 'large'
  children: React.ReactNode
  onClick: () => void
  isLoading: boolean
  // style?: React.CSSProperties
}

export default function CoolButton(props: CoolButtonProps) {
  const { variant, children, onClick, isLoading } = props

  const chakraStyle = variant === 'small' ? 'sm' : 'lg'

  return (
    <Button
      size={chakraStyle}
      // style={style}
      onClick={onClick}
      isLoading={isLoading}
    >
      {children}
    </Button>
  )
}
