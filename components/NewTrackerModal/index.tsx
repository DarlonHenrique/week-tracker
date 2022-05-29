import Image from 'next/image'
import { useState } from 'react'
import Modal from 'react-modal'
import closeImg from '../../assets/close.svg'

interface NewTrackerModalProps {
  isOpen: boolean
  onClose: () => void
}

export function NewTrackerModal({ isOpen, onClose }: NewTrackerModalProps) {
  const [category, setCategory] = useState('')
  const [minutes, setMinutes] = useState(0)
  const [color, setColor] = useState('#fff')

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
    </Modal>
  )
}
