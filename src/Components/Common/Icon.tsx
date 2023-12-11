import { IconProps } from '../../Types/Icon';

function Icon({ className, iconText, size }: IconProps) {
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={{ width: size }}>
      {iconText}
    </span>
  );
}

export default Icon;
