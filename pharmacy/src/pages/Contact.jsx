import '../css/Contact.css'

export const Contact = () => {
    return (
        <div className='contact'>
            <h2>Contact Us</h2>

            <div className='contact-info-form'>
                <section>
                    <h2>Contact Information</h2>
                    <p><strong>Phone:</strong> +972-2-123-4447</p>
                    <p><strong>Email:</strong> info@lifecarephar.com</p>
                    <p><strong>Address:</strong> 123 Main St, Ramallah, Palestine</p>
                    <p><strong>Working Hours:</strong> Sat - Thu: 8:00 AM - 10:00 PM</p>
                </section>
                <form>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" placeholder="enter your full name" required />
                    </div>
                    <div>
                        <label htmlFor="phone">Phone Number</label>
                        <input type="tel" id="phone" placeholder="enter your phone number" required />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="enter your email" required />
                    </div>
                    <div>
                        <label htmlFor="message">Message</label>
                        <textarea id="message" rows="4" placeholder="Write your message here..." required></textarea>
                    </div>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    )
}
