import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const emojis = [
  '😀', '😃', '😄', '😁', '😅', '😂', '🤣', '😊', '😇', '🙂', 
  '🌟', '⭐', '✨', '💫', '🌙', '☀️', '⚡', '🔥', '❄️', '🌈',
  '🎮', '🎲', '🎯', '🎪', '🎨', '🎭', '🎪', '🎫', '🎟️', '🎬',
  '🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯',
  '🌸', '🌺', '🌷', '🌹', '🌻', '🌼', '🌿', '☘️', '🍀', '🎍',
  '🎾', '🏈', '⚽', '🏀', '⚾', '🎱', '🏓', '🏸', '🏑', '🏒',
  '🚀', '✈️', '🚗', '🚕', '🚙', '🚌', '🏎️', '🚓', '🚑', '🚒',
  '📱', '💻', '⌨️', '🖥️', '🖨️', '🖱️', '🕹️', '💽', '💾', '💿',
  '🎵', '🎶', '🎼', '🎹', '🎸', '🎻', '🎺', '🎷', '🥁', '🎤',
  '🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🫐', '🍒'
];

export function randomEmoji() {
  const randomIndex = Math.floor(Math.random() * emojis.length);
  return emojis[randomIndex];
}