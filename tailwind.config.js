module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Updated to #5E3869
        primary: {
          DEFAULT: "#5E3869", // Updated primary color
          50: "#F3F0F4", // Light tint
          100: "#E7E0EA", // Very light tint
          200: "#CFC1D5", // Light tint
          300: "#B7A2C0", // Medium light tint
          400: "#9F83AB", // Medium tint
          500: "#5E3869", // Main color
          600: "#4B2D54", // Darker shade
          700: "#38223F", // Dark shade
          800: "#25172A", // Very dark shade
          900: "#120C15", // Darkest shade
        },
        // Secondary Colors - Updated to #0F6EA8
        secondary: {
          DEFAULT: "#0F6EA8", // Updated secondary color
          50: "#E6F2FA", // Light tint
          100: "#CCE5F5", // Very light tint
          200: "#99CBEB", // Light tint
          300: "#66B1E1", // Medium light tint
          400: "#3397D7", // Medium tint
          500: "#0F6EA8", // Main color
          600: "#0C5886", // Darker shade
          700: "#094264", // Dark shade
          800: "#062C42", // Very dark shade
          900: "#031621", // Darkest shade
        },
        // Button Colors - New #23C399
        button: {
          DEFAULT: "#23C399", // New button color
          50: "#E8F9F4", // Light tint
          100: "#D1F3E9", // Very light tint
          200: "#A3E7D3", // Light tint
          300: "#75DBBD", // Medium light tint
          400: "#47CFA7", // Medium tint
          500: "#23C399", // Main color
          600: "#1C9C7A", // Darker shade
          700: "#15755B", // Dark shade
          800: "#0E4E3C", // Very dark shade
          900: "#07271E", // Darkest shade
        },
        // Accent Colors - Keeping existing but adjusting to complement new palette
        accent: {
          DEFAULT: "#A8AEC5", // Updated to dark background color
          50: "#F4F5F8", // Light tint
          100: "#E9EBF1", // Very light tint
          200: "#D3D7E3", // Light tint
          300: "#BDC3D5", // Medium light tint
          400: "#A7AFC7", // Medium tint
          500: "#A8AEC5", // Main color (dark background)
          600: "#8A92B0", // Darker shade
          700: "#6C769B", // Dark shade
          800: "#4E5A86", // Very dark shade
          900: "#303E71", // Darkest shade
        },
        // Background Colors - Updated to #EAF2FF
        background: "#EAF2FF", // Updated background color
        surface: {
          DEFAULT: "#F5F8FF", // Lighter variant of background
          50: "#FDFDFF", // Lightest variant
          100: "#F5F8FF", // Light variant
          200: "#EAF2FF", // Main background color
          300: "#DFEAFF", // Slightly darker variant
        },
        // Text Colors - Updated primary text to #2D1939
        text: {
          primary: "#2D1939", // Updated text color
          secondary: "#64748B", // Keeping existing
          muted: "#94A3B8", // Keeping existing
        },
        // Status Colors - Updated to use button color for success
        success: {
          DEFAULT: "#23C399", // Using button color
          50: "#E8F9F4", // Light tint
          100: "#D1F3E9", // Very light tint
          500: "#23C399", // Main color
          600: "#1C9C7A", // Darker shade
        },
        warning: {
          DEFAULT: "#F59E0B", // amber-500
          50: "#FFFBEB", // amber-50
          100: "#FEF3C7", // amber-100
          500: "#F59E0B", // amber-500
          600: "#D97706", // amber-600
        },
        error: {
          DEFAULT: "#EF4444", // red-500
          50: "#FEF2F2", // red-50
          100: "#FEE2E2", // red-100
          500: "#EF4444", // red-500
          600: "#DC2626", // red-600
        },
        // Border Colors
        border: {
          DEFAULT: "#E2E8F0", // slate-200
          light: "#F1F5F9", // slate-100
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        accent: ['Crimson Text', 'serif'],
        crimson: ['Crimson Text', 'serif'],
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'display': ['2.5rem', { lineHeight: '1.2', fontWeight: '600' }],
        'heading': ['2rem', { lineHeight: '1.25', fontWeight: '600' }],
        'subheading': ['1.5rem', { lineHeight: '1.3', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
        'caption': ['0.75rem', { lineHeight: '1.4', fontWeight: '500' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'soft': '8px',
        'card': '12px',
        'modal': '16px',
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'modal': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'focus': '0 0 0 4px rgba(94, 56, 105, 0.1)', // Updated to use new primary color
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      transitionDuration: {
        '300': '300ms',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}