function IconPramuka({ color = 'currentColor', className = '' }) {
  return (
    <svg
      clipRule="evenodd"
      fillRule="evenodd"
      height="44mm"
      imageRendering="optimizeQuality"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      viewBox="0 0 2100 4400"
      width="21mm"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="m1804 3609c248-221 217-508 116-867-145-517 42-580 90-1125 87-981-237-819-281-1593-355 451 23 1056-119 1399-84-229-47-540-247-769 70 383-215 633 9 1110 248 527 518 1079 365 1534-127-358-389-671-780-618-536 72-659 473-924 693 222 267 171 664 625 838 418 160 898 39 1069-437 56 118 59 322 124 457 66 136 177 204 218 73-192-194-145-457-264-696z"
        fill={color}
      />
    </svg>
  )
}

export default IconPramuka
