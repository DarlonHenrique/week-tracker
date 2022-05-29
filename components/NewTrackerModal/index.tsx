import Image from 'next/image'
import { FormEvent, useState } from 'react'
import Modal from 'react-modal'
import closeImg from '../../assets/close.svg'
import { NewTrackerModalContainer } from './styles'

interface NewTrackerModalProps {
  isOpen: boolean
  onClose: () => void
}

export function NewTrackerModal({ isOpen, onClose }: NewTrackerModalProps) {
  const [title, setTitle] = useState('')
  const [minutes, setMinutes] = useState(0)
  const [color, setColor] = useState('#fff')

  const handleCreateNewTracker = (event: FormEvent) => {
    event.preventDefault()

    console.table({
      title,
      minutes,
      color
    })

    onClose()
  }
  return (
    <Modal
      isOpen={isOpen}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
      onRequestClose={onClose}
    >
      <button type='button' className='react-modal-close' onClick={onClose}>
        <Image src={closeImg} alt='fechar modal' />
      </button>

      <NewTrackerModalContainer onSubmit={handleCreateNewTracker}>
        <h2>New Tracker</h2>

        <input
          placeholder='Title'
          type='text'
          value={title}
          onChange={e => setTitle(e.target.value)}
        />

        <input
          placeholder='Minutes'
          type='number'
          value={minutes}
          onChange={e => setMinutes(Number(e.target.value))}
        />

        <input
          placeholder='Color'
          type='color'
          value={color}
          onChange={e => setColor(e.target.value)}
        />

        <button type='submit'>Create Tracker</button>
      </NewTrackerModalContainer>
    </Modal>
  )
}
