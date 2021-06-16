import { TypedEmitter } from 'tiny-typed-emitter'
import { Disclosure as DisclosureTypes } from '@friendlyss/react-boost/types'

type DisclosureNames = keyof DisclosureTypes

interface DisclosureEvents {
  open: (name: DisclosureNames, data: any) => void
  close: (name: DisclosureNames) => void
}

class Disclosure extends TypedEmitter<DisclosureEvents> {
  public open<N extends DisclosureNames>(name: N, data?: DisclosureTypes[N]) {
    this.emit('open', name, {
      name,
      ...(data || {})
    })
  }

  public close(name: DisclosureNames) {
    this.emit('close', name)
  }
}

export default new Disclosure()
