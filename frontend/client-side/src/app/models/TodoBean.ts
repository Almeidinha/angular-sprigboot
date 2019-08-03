export class TodoBean {
    constructor() {}

    private  id: number;
    private userName: string;
    private description: string;
    private targetDate: Date;
    private isDone: boolean;

    /**
     * Getter id
     * @return {number}
     */
	public get $id(): number {
		return this.id;
	}

    /**
     * Getter userName
     * @return {string}
     */
	public get $userName(): string {
		return this.userName;
	}

    /**
     * Getter description
     * @return {string}
     */
	public get $description(): string {
		return this.description;
	}

    /**
     * Getter targetDate
     * @return {Date}
     */
	public get $targetDate(): Date {
		return this.targetDate;
	}

    /**
     * Getter isDone
     * @return {boolean}
     */
	public get $isDone(): boolean {
		return this.isDone;
	}

    /**
     * Setter id
     * @param {number} value
     */
	public set $id(value: number) {
		this.id = value;
	}

    /**
     * Setter userName
     * @param {string} value
     */
	public set $userName(value: string) {
		this.userName = value;
	}

    /**
     * Setter description
     * @param {string} value
     */
	public set $description(value: string) {
		this.description = value;
	}

    /**
     * Setter targetDate
     * @param {Date} value
     */
	public set $targetDate(value: Date) {
		this.targetDate = value;
	}

    /**
     * Setter isDone
     * @param {boolean} value
     */
	public set $isDone(value: boolean) {
		this.isDone = value;
	}
    
}