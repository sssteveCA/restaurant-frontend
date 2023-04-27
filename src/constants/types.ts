import { Type } from "typescript";

namespace Types{

    /**
     * AppareanceTextComponent props
     */
    export type AppareanceTextProps = {
        id: string, text: string;
    }

    /**
     * BlogComponent state
     */
    export type BlogState = {
        articles: any[], message: string, spinner_show: boolean
    }

    /**
     * CheckBoxComponent props
     */
    export type CheckBoxProps = {
        checkbox_id: string, label_text: string, onCbChange: (checked: boolean) => void
    }

    /**
     * CardComponent props
     */
    export type CardProps = {
        id?: number, button_text: string, image: string, text: string, title: string, url: string
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
        contacts_message: string, email: string, message: string, name: string, show_spinner: boolean
    }

    /**
     * DishItemComponent props
     */
    export type DisheItemProps = {
    }

    /**
     * DishesComponent state
     */
    export type DishesState = {
        dishes: any[], match_dishes: any[], message: string, query: string, spinner_show: boolean
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
        email: string, password: string, login_message: string, password_type: string, show_spinner: boolean
    }


    export type MenuItem = {
        id: number, link: string, title: string
    }

    /**
     * Message component props
     */
    export type MessageProps = {
        message: string
    }

    /**
     * Navbar state
     */
    export type NavbarState = {
        info_hover: boolean, logged: boolean
    }

    export type PrivacyProps = {
        menu_privacy: Types.MenuItem[], show: boolean
    }

    /**
     * RegisterComponent state
     */
    export type RegisterState = {
        first_name: string, last_name: string, email: string, password: string, conf_password: string, passwords_type: string, register_message: string, show_spinner: boolean
    }

    export type RestaurantMenuState = {
        menu: any[], message: string, spinner_show: boolean
    }

    /**
     * SearchInputComponent props
     */
    export type SearchInputProps = {
        onFieldInput: (query: string) => void, query: string
    }

    /**
     * SpinnerComponent props
     */
    export type SpinnerProps = {
        visible: boolean
    }

    export type TeamItemProps = {
        id: number,
        image: {
            classes: string, name: string, url: string
        },
        text: {
            classes: string, description: string, title: string, 
        }
    }

    /**
     * TwoButtonsComponent props
     */
    export type TwoButtonsProps = {
        buttons: [
            { classes: string, text: string },
            { classes: string, text: string },
        ],
        onPrimaryButtonClick(): void,
        show_spinner: boolean
    }
}

export default Types