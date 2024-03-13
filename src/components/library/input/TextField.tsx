import styles from "./TextField.module.css";

interface TextFieldProps {
    variant: "outlined" | "filled";
    id: string;
    labelText: string;
    inputPlaceholder?: string;
    inputText: string;
    inputFunction: React.ChangeEventHandler<HTMLInputElement>;
    supportingText?: string;
}

export default function TextField({variant, id, labelText, inputPlaceholder, inputText, inputFunction, supportingText}: TextFieldProps) {

    return (
        <div className={`${styles.container} ${styles[variant]}`}>
            <input className={styles.inputText} id={id} placeholder={inputPlaceholder} value={inputText} onChange={inputFunction} type="text" />
            <label className={styles.labelText} htmlFor={id}>{labelText}</label>
            {supportingText && <p className={styles.supportingText}>{supportingText}</p>}
        </div>
    );
}