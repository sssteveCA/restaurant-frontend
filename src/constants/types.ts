
namespace Types{

    /**
     * CheckBoxComponent props
     */
    export type CheckBoxProps = {
        checkbox_id: string, label_text: string, onCbChange: (checked: boolean) => void
    }

    /**
     * ContactsComponent props
     */
    export type ContactsProps = {
        title: string
    }

    /**
     * ContactsComponent state
     */
    export type ContactsState = {
        name: string, email: string, message: string 
    }

    /**
     * LabelInputComponent props
     */
    export type LabelInputProps = {
        label_text: string, input_id: string, input_type: string, onInputChange: (id: string, value: string) => void
    }

    /**
     * LabelTextAreaComponent props
     */
    export type LabelTextAreaProps = {
        label_text: string, textarea_id: string, onTextAreaChange: (id: string, value: string) => void
    }

    /**
     * LoginComponent state
     */
    export type LoginState = {
        email: string, password: string, login_message: string, password_type: string
    }


    export type MenuItem = {
        id: number, link: string, title: string
    }

    /**
     * Message component props
     */
    export type MessageProps = {
        classes?: string, message: string
    }

    /**
     * RegisterComponent state
     */
    export type RegisterState = {
        first_name: string, last_name: string, email: string, password: string, conf_password: string, passwords_type: string, register_message: string
    }

    /**
     * TwoButtonsComponent props
     */
    export type TwoButtonsProps = {
        buttons: [
            { classes: string, text: string },
            { classes: string, text: string },
        ],
        onPrimaryButtonClick(): void
    }
}

export default Types