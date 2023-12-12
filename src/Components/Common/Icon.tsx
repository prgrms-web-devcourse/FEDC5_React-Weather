import { IconProps } from '../../Types/Icon';

function Icon({ className, iconText, size }: IconProps) {
  return (
    <div className={className}>
      <span
        className={'material-symbols-outlined'}
        style={{ width: size }}>
        {iconText}
      </span>
    </div>
  );
}

export default Icon;
