import { Info } from "lucide-react";
import React from "react";
import SectionCard from "./SectionCard";
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

const markdown = `
## JavaScript Quiz: Scope and Closures

### Question:

Consider the following JavaScript code:

\`\`\`javascript
function outerFunction() {
  let outerVariable = "I am outer";
  
  return function innerFunction() {
    console.log(outerVariable);
  };
}

const closureExample = outerFunction();
closureExample();
\`\`\`

What will be the output when the \`closureExample\` function is invoked?

### Options:
1. A. \`undefined\`
2. B. \`I am outer\`
3. C. \`ReferenceError: outerVariable is not defined\`
4. D. \`null\`

---

### Explanation:

- **Scope** in JavaScript determines where variables can be accessed.
- In this example, \`innerFunction\` forms a **closure** over \`outerVariable\`, allowing it to remember and access variables declared in its parent function (\`outerFunction\`), even after the parent function has finished executing.

---

### Correct Answer:

✅ **B. \`I am outer\`**

---

### Why?

- The variable \`outerVariable\` is declared in the \`outerFunction\` scope.
- When \`outerFunction\` is executed, it returns the \`innerFunction\` but does not destroy the \`outerVariable\`.
- \`innerFunction\` "closes over" the \`outerVariable\` because of closures in JavaScript, allowing it to retain access to the variable.

When \`closureExample\` is invoked, it logs the value of \`outerVariable\`:

\`\`\`bash
I am outer
\`\`\`

---

### Key Concept:
Closures allow functions to access variables from their **lexical scope** even after the outer function has executed.

`;

export default function SessionBody() {
  return <>
    <SectionCard
      heading="The title of this session"
      subHeading="The reason for this section"
      Icon={Info}
      rightComponent={
        <>
          <p className='text-muted-foreground'>3/12</p>
        </>
      }
      progress={70}
    >
      <div className="py-6 px-3">
        <ReactMarkdown
          components={{
            code({ inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '');
              return !inline && match ? (
                <SyntaxHighlighter style={materialLight} language={match[1]} {...props} className='rounded-xl border'>
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        >
          {markdown}
        </ReactMarkdown>
      </div>
    </SectionCard>
  </>
}
