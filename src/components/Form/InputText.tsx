import { TextField } from '@mui/material'
import React from 'react'

interface IProps {
    error?: boolean
    required?: boolean
    label: string
    value: string
    name: string
    helperText?: string
    placeholder?: string
    onChange: (...args: any) => any
    onBlur: (...args: any) => any
}

const InputText = ({ name, label, value, helperText, placeholder, onChange, onBlur, error, required }: IProps) => {
    return (
        
            <TextField 
                label={label}
                value={value}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                onBlur={onBlur}
                helperText={helperText}
                required={required}
                error={error}
                variant='outlined'
                color='primary'
                sx={{
                    width:'100%',
                    marginBottom: '16px'
                }}
            />
        
    )
}

export default InputText