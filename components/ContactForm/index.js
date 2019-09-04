import React from 'react';
import Input from '../Input';
import Button from '../Button';
import { P } from '../typography/copy';
import useForm from '../../hooks/useForm';

const ContactForm = () => {
    const onSubmit = values =>
        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        });

    const form = useForm(
        {
            firstName: '',
            lastName: '',
            email: '',
            message: '',
            ignore: ''
        },
        onSubmit
    );

    if (form.submitted) {
        return <P lead>Thanks</P>;
    }

    return (
        <form onSubmit={form.handleSubmit} className="container">
            <div className="columns is-centered">
                <div className="column is-8-tablet is-6-desktop">
                    <div className="columns">
                        <div className="column">
                            <Input
                                name="firstName"
                                placeholder="First name"
                                required
                                onChange={form.handleChange}
                                value={form.values.firstName}
                            />
                        </div>
                        <div className="column">
                            <Input
                                name="lastName"
                                placeholder="Last name"
                                required
                                onChange={form.handleChange}
                                value={form.values.lastName}
                            />
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column">
                            <Input
                                name="email"
                                type="email"
                                placeholder="Email address"
                                required
                                onChange={form.handleChange}
                                value={form.values.email}
                            />
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column">
                            <Input
                                name="message"
                                rows="5"
                                as="textarea"
                                placeholder="Message"
                                required
                                minLength="140"
                                onChange={form.handleChange}
                                value={form.values.message}
                            />
                        </div>
                    </div>

                    <input
                        style={{
                            display: 'none'
                        }}
                        name="ignore"
                        onChange={form.handleChange}
                        value={form.values.ignore}
                    />

                    <Button
                        loading={form.submitting}
                        disabled={form.submitting}
                        block
                        type="submit"
                    >
                        Send message
                    </Button>
                    {form.error && <P>Failed to send message</P>}
                </div>
            </div>
        </form>
    );
};

export default ContactForm;
