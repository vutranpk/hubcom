import json

log_file = "/Users/macmini/.gemini/antigravity/brain/15e33edb-c989-4789-9bc9-b6e7978b8b7c/.system_generated/logs/transcript.jsonl"

file_content = None
found = False

with open(log_file, 'r') as f:
    lines = f.readlines()
    
# Search backwards for the tool call where I reverted Process Prism to 15:44
# Or search backwards for the view_file of process-prism.tsx
for line in reversed(lines):
    try:
        data = json.loads(line)
        if "tool_calls" in data:
            for call in data["tool_calls"]:
                if call.get("function") == "multi_replace_file_content" and "process-prism.tsx" in str(call):
                    # Check if this is the one where I reverted
                    args = call.get("arguments", {})
                    if "Revert to 15:44 Version" in args.get("toolAction", ""):
                        print("Found the 15:44 revert tool call!")
                        
    except Exception as e:
        pass
