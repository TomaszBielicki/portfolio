import React from 'react';
import { Box, Container, Typography, IconButton, Divider } from '@mui/material';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const socialLinks = [
  { icon: <Github size={20} />, href: 'https://github.com/yourusername' },
  { icon: <Linkedin size={20} />, href: 'https://linkedin.com/in/yourusername' },
  { icon: <Twitter size={20} />, href: 'https://twitter.com/yourusername' },
  { icon: <Mail size={20} />, href: 'mailto:your.email@example.com' },
];

export const Footer = () => {
  return (
    <Box component="footer" sx={{ py: 6, mt: 8 }}>
      <Container maxWidth="lg">
        <Divider sx={{ mb: 4 }} />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            {socialLinks.map((link, index) => (
              <IconButton
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ 
                  color: 'text.secondary',
                  '&:hover': { 
                    color: 'primary.main',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.2s',
                }}
              >
                {link.icon}
              </IconButton>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};