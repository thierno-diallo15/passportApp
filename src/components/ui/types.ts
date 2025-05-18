import { HTMLAttributes } from 'react'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {}
export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {}
export interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {}
export interface CardContentProps extends HTMLAttributes<HTMLDivElement> {}
export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {}

export interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  defaultValue?: string
}
export interface TabsListProps extends HTMLAttributes<HTMLDivElement> {}
export interface TabsTriggerProps extends HTMLAttributes<HTMLButtonElement> {
  value: string
}
export interface TabsContentProps extends HTMLAttributes<HTMLDivElement> {
  value: string
} 