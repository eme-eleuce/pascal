"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [formData, setFormData] = useState({
    vorname: '',
    name: '',
    email: '',
    nachricht: ''
  })
  const [status, setStatus] = useState({
    message: '',
    isError: false,
    isSubmitting: false
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ message: '', isError: false, isSubmitting: true })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()
      console.log('Response:', data)

      if (!response.ok) {
        throw new Error(data.message || 'Ein Fehler ist aufgetreten')
      }

      setStatus({
        message: 'Nachricht erfolgreich gesendet!',
        isError: false,
        isSubmitting: false
      })
      setFormData({ vorname: '', name: '', email: '', nachricht: '' })
    } catch (error) {
      console.error('Error submitting form:', error)
      setStatus({
        message: `Error: ${error.message}`,
        isError: true,
        isSubmitting: false
      })
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 overflow-hidden">
        <motion.div 
          className="bg-gradient-to-r from-orange-600/10 to-orange-600/5 border-b border-gray-200/50 px-6 py-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-orange-600">
            KONTAKT
          </h1>
          <p className="text-xl md:text-2xl font-semibold mt-4 text-gray-700">
            Kontaktiert uns und lasst uns über euer Vorhaben sprechen!
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="p-6 space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="vorname" className="block text-sm font-medium mb-1 text-gray-700">Vorname</label>
              <input
                type="text"
                id="vorname"
                name="vorname"
                value={formData.vorname}
                onChange={handleChange}
                required
                className="w-full p-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 bg-white/50"
              />
            </div>

            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1 text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 bg-white/50"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-700">Deine email*</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 bg-white/50"
            />
          </div>

          <div>
            <label htmlFor="nachricht" className="block text-sm font-medium mb-1 text-gray-700">Nachricht*</label>
            <textarea
              id="nachricht"
              name="nachricht"
              value={formData.nachricht}
              onChange={handleChange}
              required
              rows="4"
              className="w-full p-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 bg-white/50"
            />
          </div>

          {status.message && (
            <div className={`p-3 rounded-lg text-sm ${status.isError ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
              {status.message}
            </div>
          )}

          <button
            type="submit"
            disabled={status.isSubmitting}
            className="w-full bg-orange-600 text-white py-3 px-6 rounded-lg text-base font-semibold
              hover:bg-orange-700 transition-colors duration-300 disabled:opacity-50"
          >
            {status.isSubmitting ? 'Wird gesendet...' : 'ABSCHICKEN'}
          </button>
        </motion.form>
      </div>
    </section>
  )
}
