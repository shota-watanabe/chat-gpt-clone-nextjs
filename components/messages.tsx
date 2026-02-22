import { useScrollToBottom } from "@/hooks/use-scroll-to-bottom";
import { Message } from "./message";

export function Messages({ messages }: any) {
  // 自動スクロール用の設定
  const [messagesContainerRef, messagesEndRef] =
    useScrollToBottom<HTMLDivElement>();

  return (
    <div
      ref={messagesContainerRef}
      className="flex flex-col min-w-0 gap-6 flex-1 overflow-y-scroll pt-4"
    >
      {messages.map((message: any) => (
        <Message key={message.id} message={message} />
      ))}

      {/* スクロール位置の終端を示す要素 */}
      <div ref={messagesEndRef} className="shrink-0 min-w-6 min-h-6" />
    </div>
  );
}
